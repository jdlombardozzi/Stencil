class PagesController < ApplicationController
  def index
    @articles = Gditweb::Article.all
  end
end
