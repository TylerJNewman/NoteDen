# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150824043416) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "api_notebooks", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "api_notes", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "note_tags", force: :cascade do |t|
    t.integer  "tag_id",     null: false
    t.integer  "note_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "note_tags", ["note_id"], name: "index_note_tags_on_note_id", using: :btree
  add_index "note_tags", ["tag_id", "note_id"], name: "index_note_tags_on_tag_id_and_note_id", unique: true, using: :btree
  add_index "note_tags", ["tag_id"], name: "index_note_tags_on_tag_id", using: :btree

  create_table "notebooks", force: :cascade do |t|
    t.text     "name",       null: false
    t.integer  "owner_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "notebooks", ["owner_id"], name: "index_notebooks_on_owner_id", using: :btree

  create_table "notes", force: :cascade do |t|
    t.string   "title",       default: "Untitled"
    t.text     "body"
    t.integer  "owner_id",                         null: false
    t.integer  "notebook_id"
    t.datetime "created_at",                       null: false
    t.datetime "updated_at",                       null: false
  end

  add_index "notes", ["notebook_id"], name: "index_notes_on_notebook_id", using: :btree
  add_index "notes", ["owner_id"], name: "index_notes_on_owner_id", using: :btree
  add_index "notes", ["title"], name: "index_notes_on_title", using: :btree

  create_table "tags", force: :cascade do |t|
    t.text     "name",       null: false
    t.integer  "owner_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "tags", ["owner_id"], name: "index_tags_on_owner_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "password_digest"
    t.string   "email"
    t.string   "session_token"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

end
