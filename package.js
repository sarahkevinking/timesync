Package.describe({
  name: 'flowhamster:timesync',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Publish server time to client',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/flowhamster/timesync',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use('coffeescript');

  api.addFiles(['init.js', 'timesync-client.coffee'], ['client']);
  api.addFiles(['timesync-server.coffee'], ['server']);

  api.export('Timesync', 'client')
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('flowhamster:timesync');
  api.addFiles('timesync-tests.js');
});
