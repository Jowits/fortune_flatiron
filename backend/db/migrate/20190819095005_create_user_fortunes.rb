class CreateUserFortunes < ActiveRecord::Migration[5.2]
  def change
    create_table :user_fortunes do |t|
      t.references :user, foreign_key: true
      t.references :fortune, foreign_key: true

      t.timestamps
    end
  end
end
