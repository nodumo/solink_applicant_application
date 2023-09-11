CREATE TABLE "location_types" (
  "id" varchar PRIMARY KEY,
  "name_eng" varchar NOT NULL,
  "name_key" varchar NOT NULL
);

CREATE TABLE "locations" (
  "id" varchar PRIMARY KEY,
  "parent_id" varchar,
  "location_types_id" varchar,
  "name" varchar NOT NULL
);

CREATE TABLE "asset_types" (
  "id" varchar PRIMARY KEY,
  "name_eng" varchar NOT NULL,
  "name_key" varchar NOT NULL
);

CREATE TABLE "asset" (
  "id" varchar PRIMARY KEY,
  "dateTimeCreated" timestamptz NOT NULL,
  "dateTimeDeleted" timestamptz NOT NULL,
  "dateTimeUpdated" timestamptz NOT NULL,
  "asset_type" varchar,
  "primary_location_id" varchar,
  "name" varchar NOT NULL,
  "description" varchar NOT NULL
);

ALTER TABLE "locations" ADD FOREIGN KEY ("parent_id") REFERENCES "location_types" ("id");

ALTER TABLE "locations" ADD FOREIGN KEY ("location_types_id") REFERENCES "location_types" ("id");

ALTER TABLE "asset" ADD FOREIGN KEY ("asset_type") REFERENCES "asset_types" ("id");

ALTER TABLE "asset" ADD FOREIGN KEY ("primary_location_id") REFERENCES "location_types" ("id");
