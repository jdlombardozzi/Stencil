module ApplicationHelper
  def json_true
    (true).to_json
  end

  def is_rtl?
    %w{ar ur fa}.include?(I18n.locale.to_s)
  end
end
