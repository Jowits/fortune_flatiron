class CreateFortunes < ActiveRecord::Migration[5.2]
  def change
    create_table :fortunes do |t|
      t.string :content

      t.timestamps
    end
  end
end
