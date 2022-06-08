module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      staticDistDir: './dist',
      url: [
        '/'
      ],
    },
    // https://github.com/GoogleChrome/lighthouse-ci/blob/v0.8.2/docs/getting-started.md#add-assertions
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'apple-touch-icon': 'off',
        'crawlable-anchors': 'off',
        'csp-xss': 'off',
        'html-has-lang': 'off',
        'installable-manifest': 'off',
        'link-name': 'off',
        'maskable-icon': 'off',
        'meta-description': 'off',
        'service-worker': 'off',
        'splash-screen': 'off',
        'themed-omnibox': 'off',
      },
    },
    upload: {
      // https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md#target
      target: 'temporary-public-storage'
    },
  },
};
