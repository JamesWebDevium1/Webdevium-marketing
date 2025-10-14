# WordPress Setup Guide

This guide walks through setting up WordPress on Kinsta with all necessary plugins and configuration for the Webdevium marketing site.

## 1. Kinsta WordPress Setup

### Create WordPress Installation
1. Log in to Kinsta dashboard
2. Create new WordPress site named `webdevium-cms`
3. Set up staging environment
4. Enable Kinsta CDN
5. Force HTTPS

### DNS Configuration
Point `cms.webdevium.com` to your Kinsta site:
- Add CNAME record: `cms.webdevium.com` → `[your-kinsta-domain]`

## 2. Required Plugins

Install and activate these plugins in WordPress admin:

### Core Plugins
1. **WPGraphQL** (v1.14+)
   - Download: https://wordpress.org/plugins/wp-graphql/
   - Provides GraphQL API for WordPress

2. **WPGraphQL for Advanced Custom Fields**
   - Download: https://github.com/wp-graphql/wp-graphql-acf
   - Exposes ACF fields to GraphQL

3. **Advanced Custom Fields (ACF Pro)**
   - Purchase: https://www.advancedcustomfields.com/pro/
   - Required for custom field management

4. **Yoast SEO**
   - Download: https://wordpress.org/plugins/wordpress-seo/
   - For SEO management

5. **WPGraphQL Yoast SEO Addon** (Optional)
   - Download: https://github.com/ashhitch/wp-graphql-yoast-seo
   - Exposes Yoast fields to GraphQL

### Optional Plugins
6. **Cloudinary** (if using Cloudinary sync)
   - Download: https://wordpress.org/plugins/cloudinary-image-management-and-manipulation-in-the-cloud-cdn/

7. **WP Mail SMTP**
   - Download: https://wordpress.org/plugins/wp-mail-smtp/
   - Configure with Postmark or SendGrid

## 3. Import ACF Field Groups

1. In WordPress admin, go to **Custom Fields → Tools**
2. Select **Import Field Groups**
3. Import each JSON file from the `wordpress/` directory:
   - `acf-homepage.json` - Homepage fields
   - `acf-blog-extras.json` - Blog post extras
   - `acf-pricing-page.json` - Pricing page fields
   - `acf-how-it-works-page.json` - How It Works page fields

## 4. Create Pages

### Homepage
1. Create new page titled "Home"
2. Set as homepage: **Settings → Reading → Homepage displays → A static page → Home**
3. Note the page ID from the URL (e.g., `post.php?post=2`) - this is your `HOMEPAGE_DBID`

### Other Pages
Create these pages with the specified slugs:
- **Pricing** (`/pricing`)
- **How It Works** (`/how-it-works`)

## 5. CORS Configuration

Add CORS headers to allow Next.js frontend to access GraphQL:

1. Go to **WPGraphQL → Settings**
2. Under **GraphQL Endpoint**, ensure it's set to `/graphql`
3. Add CORS headers via `.htaccess` or Kinsta's dashboard:

```apache
<IfModule mod_headers.c>
    SetEnvIf Origin "^https://(webdevium\.com|.*\.vercel\.app)$" ORIGIN_DOMAIN=$0
    Header set Access-Control-Allow-Origin "%{ORIGIN_DOMAIN}e" env=ORIGIN_DOMAIN
    Header set Access-Control-Allow-Methods "GET, POST, OPTIONS"
    Header set Access-Control-Allow-Headers "Content-Type, Authorization"
</IfModule>
```

## 6. GraphQL Configuration

1. Go to **WPGraphQL → Settings**
2. Enable GraphQL endpoint: `/graphql`
3. Enable GraphQL IDE (GraphiQL)
4. Test queries at: `https://cms.webdevium.com/graphql`

### Test Query
```graphql
query TestQuery {
  generalSettings {
    title
    description
  }
}
```

## 7. Revalidation Webhook Setup

Add the webhook code to trigger Next.js revalidation:

1. Go to **Appearance → Theme File Editor**
2. Select `functions.php`
3. Paste the contents of `revalidation-webhook.php`
4. Save

Or create a custom plugin:
1. Create folder: `wp-content/plugins/webdevium-revalidation/`
2. Create file: `webdevium-revalidation.php`
3. Add plugin header and webhook code
4. Activate plugin

### Set Environment Variables in Kinsta
1. Go to your site in Kinsta dashboard
2. Navigate to **Environment Variables**
3. Add:
   - `NEXT_REVALIDATE_URL` = `https://webdevium.com/api/revalidate`
   - `REVALIDATE_SECRET` = `[your-secret-from-.env]`

## 8. Create Read-Only User (Optional)

For security, create a read-only user for the dev team:

1. **Users → Add New**
2. Username: `developer-readonly`
3. Role: Subscriber
4. Generate strong password

Install **User Role Editor** plugin to limit permissions further if needed.

## 9. Performance & Security

### Kinsta Configuration
- ✅ Enable Kinsta CDN
- ✅ Enable Kinsta Cache
- ✅ Force HTTPS
- ✅ Enable HTTP/2
- ✅ Configure daily backups (retain 14-30 days)

### WordPress Settings
1. **Settings → Permalinks**: Post name
2. **Settings → Reading**: 
   - Homepage: Static page → Home
   - Posts page: Blog (create if needed)
3. **Settings → Discussion**: Disable comments on pages

## 10. Content Entry Workflow

### Homepage Content
1. Edit the "Home" page
2. Fill in all ACF fields:
   - Hero section (kicker, title, subtitle, CTAs, image)
   - Logo bar
   - How It Works steps
   - Pricing tiers
   - FAQ section

### Blog Posts
1. Create new post
2. Add featured image (1200×630px recommended)
3. Fill SEO fields (Yoast)
4. Add custom fields:
   - Reading time (auto-calculated if left empty)
   - Post CTA (optional)

### Testing Content
1. Make changes in WordPress
2. Check GraphiQL: `https://cms.webdevium.com/graphql`
3. Verify content appears in Next.js site
4. Check revalidation triggers in server logs

## 11. Troubleshooting

### GraphQL Not Working
- Check WPGraphQL is activated
- Verify GraphQL endpoint: `https://cms.webdevium.com/graphql`
- Test with GraphiQL interface
- Check for PHP errors in Kinsta logs

### ACF Fields Not Appearing
- Ensure WPGraphQL for ACF is activated
- Check field group is assigned to correct post type/template
- Refresh GraphQL schema: **WPGraphQL → Settings → Schema**

### Revalidation Not Triggering
- Check webhook secret matches between WP and Next.js
- Verify NEXT_REVALIDATE_URL is correct
- Check error logs in Kinsta dashboard
- Test webhook manually with curl

### CORS Errors
- Verify CORS headers are set correctly
- Check Cloudflare or CDN settings aren't blocking
- Test from different origins (localhost, Vercel preview)

## 12. Go-Live Checklist

- [ ] All plugins installed and activated
- [ ] ACF field groups imported
- [ ] Homepage and pages created
- [ ] GraphQL endpoint accessible
- [ ] CORS configured correctly
- [ ] Revalidation webhook working
- [ ] Staging environment set up
- [ ] Daily backups configured
- [ ] Read-only user created (if needed)
- [ ] Performance optimizations enabled
- [ ] Test content migration completed
- [ ] DNS pointed correctly

## Support

For issues specific to:
- **Kinsta**: Contact Kinsta support
- **WPGraphQL**: https://www.wpgraphql.com/docs
- **ACF**: https://www.advancedcustomfields.com/resources/

