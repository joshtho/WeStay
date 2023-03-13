class CreateLodgings < ActiveRecord::Migration[6.1]
  def change
    create_table :lodgings do |t|
      t.string :link
      t.integer :guests
      t.string :season
      t.string :dates
      t.belongs_to :location, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
