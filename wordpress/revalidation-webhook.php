<?php
/**
 * Webdevium Revalidation Webhook
 * 
 * Add this to your theme's functions.php or create a custom plugin
 * to trigger Next.js revalidation on content updates.
 */

// Trigger revalidation on post/page save
add_action('save_post', 'webdevium_trigger_revalidation', 10, 3);

function webdevium_trigger_revalidation($post_id, $post, $update) {
    // Skip autosaves and revisions
    if (wp_is_post_autosave($post_id) || wp_is_post_revision($post_id)) {
        return;
    }

    // Skip if not published
    if ($post->post_status !== 'publish') {
        return;
    }

    // Only trigger for posts and pages
    if (!in_array($post->post_type, ['post', 'page'])) {
        return;
    }

    // Get environment variables
    $revalidate_url = getenv('NEXT_REVALIDATE_URL') ?: 'https://webdevium.com/api/revalidate';
    $revalidate_secret = getenv('REVALIDATE_SECRET') ?: 'your-secret-here';

    // Determine the path to revalidate
    $path = '';
    if ($post->post_type === 'post') {
        $path = '/blog/' . $post->post_name;
    } elseif ($post->post_type === 'page') {
        $path = '/' . $post->post_name;
        
        // Special case for homepage
        if ($post->ID == get_option('page_on_front')) {
            $path = '/';
        }
    }

    // Prepare payload
    $payload = array(
        'path' => $path,
        'type' => $post->post_type,
    );

    // Send webhook
    $response = wp_remote_post($revalidate_url, array(
        'headers' => array(
            'Content-Type' => 'application/json',
            'x-webhook-secret' => $revalidate_secret,
        ),
        'body' => json_encode($payload),
        'timeout' => 10,
    ));

    // Log response (optional)
    if (is_wp_error($response)) {
        error_log('Revalidation failed: ' . $response->get_error_message());
    } else {
        error_log('Revalidation triggered for: ' . $path);
    }
}

// Also trigger on post deletion
add_action('delete_post', 'webdevium_trigger_revalidation_on_delete', 10, 2);

function webdevium_trigger_revalidation_on_delete($post_id, $post) {
    if ($post->post_type === 'post') {
        // Revalidate blog archive
        $revalidate_url = getenv('NEXT_REVALIDATE_URL') ?: 'https://webdevium.com/api/revalidate';
        $revalidate_secret = getenv('REVALIDATE_SECRET') ?: 'your-secret-here';

        wp_remote_post($revalidate_url, array(
            'headers' => array(
                'Content-Type' => 'application/json',
                'x-webhook-secret' => $revalidate_secret,
            ),
            'body' => json_encode(array('path' => '/blog')),
            'timeout' => 10,
        ));
    }
}

