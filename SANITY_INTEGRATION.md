# Sanity CMS Integration Guide

## Overview
Your portfolio is now integrated with Sanity CMS (Project ID: 7gf6pj50). This allows you to dynamically manage your landing page content.

## Files Created

### 1. `/src/lib/sanity.ts`
Sanity client configuration and image URL builder.

### 2. `/schemas/landingPage.js`
Schema definition for the landing page content type.

## How It Works

### Hero Component Integration
The Hero component (`src/components/Hero.tsx`) now fetches content from Sanity CMS:

- **Title**: Page title (falls back to "Production Assistant Portfolio")
- **Hero Image**: Background image (falls back to Pexels stock photo)
- **Description**: Page description
- **CTA Button**: Customizable call-to-action button text and URL

### Content Structure
In your Sanity Studio, you can create a document with type `landingPage` containing:

```javascript
{
  title: "Your custom title",
  heroImage: { ... }, // Image upload
  description: "Your description text",
  ctaButton: {
    text: "Button text",
    url: "https://your-url.com"
  }
}
```

## Next Steps

### Set Up Sanity Studio (if not already done):

1. Visit https://www.sanity.io/manage
2. Log in or create an account
3. Find your project (ID: 7gf6pj50)
4. Configure the schema using the `schemas/landingPage.js` file
5. Add content to your landing page

### Local Development:
The integration is ready to use. When you run your development server, the Hero component will:
- Attempt to fetch content from Sanity
- Fall back to default content if Sanity data is unavailable
- Display loading states appropriately

### Testing:
1. Create a landing page document in your Sanity Studio
2. Publish the document
3. Refresh your portfolio page
4. Your custom content should appear

## Troubleshooting

- **No content appearing**: Check that you have published content in Sanity Studio
- **CORS errors**: Ensure your domain is added to the CORS settings in Sanity project settings
- **Image not loading**: Verify the image was uploaded successfully in Sanity Studio

## Benefits

✓ Easy content updates without code changes
✓ Image optimization through Sanity CDN
✓ Version control for content
✓ Preview changes before publishing
