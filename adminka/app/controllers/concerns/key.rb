module Key
  extend ActiveSupport::Concern

  def random_key
    chars = ('0'..'9').to_a + ('A'..'Z').to_a + ('a'..'z').to_a
    chars.sort_by { rand }.join[0...20]
  end

end