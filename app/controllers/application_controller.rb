class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method [:url_for]

  # Override plugin method. No need to set a mobile format
  skip_filter :set_mobile_format

  # Override the default rails url_for method to revert the encoding of slashes
  #
  def url_for(options=nil)
    if options.kind_of?(Hash)
      options[:locale] = I18n.locale if options[:locale].blank?
    end

    super(options)
  end
end
