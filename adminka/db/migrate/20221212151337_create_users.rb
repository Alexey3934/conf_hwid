class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :info
      t.string :key
      t.string :hwid
      t.string :end_of_action
      t.string :time_of_action
      t.string :state

      t.timestamps
    end
  end
end
