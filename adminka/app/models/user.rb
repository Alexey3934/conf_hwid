class User < ApplicationRecord
  validates :time_of_action, numericality: { greater_than_or_equal_to:1, message: 'ввести число больше "0" ' }
end
