# Capistrano release structure
#require 'capistrano/ext/multistage'

# Execute "bundle install" after deploy, but only when really needed
require 'bundler/capistrano'

# RVM integration
require 'rvm/capistrano'

server 'tofurkey.gditweb.com', :app, :web, :db, :primary => true
set :user, 'ioweb'
set :deploy_to, '/home/ioweb/apps/stencil'
set :repository, 'git@git:stencil'
set :tag_timestamp, Time.now.utc
set :keep_releases, 3

set :rvm_ruby_string, '2.0.0@stencil'
set :rvm_type, :user # this is the money config, it defaults to :system
