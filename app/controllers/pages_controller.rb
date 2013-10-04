class PagesController < ApplicationController
  # Essentially just a shell of an iframe
  def index; end

  # Dynamically checks for a method related to the page id and then renders the page
  # Will mostly be show through the index iframe
  def show
    send("page__#{params[:id].gsub("\/", '_')}") if respond_to?("page__#{params[:id].gsub("\/", '_')}")

    @id = params[:id]

    render :layout => false
  end

  def page__taxa_article
    @article = Gditweb::Feature.new({date: Date.today.strftime('%Y-%m-%d'),
                                     title: 'Lorem ipsum headline slipsum'
                                    })

    # Use @article to create an array of articles
    @features_horizontal = 4.times.try(:inject, []) { |rows, row|
      rows << @article

      rows
    }
  end

  def page__templates_article
    @article = Gditweb::Feature.find('ste/feature/1')
  end
end