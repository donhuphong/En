import Realm from 'realm';
import { UserSchema } from './schemas/UserSchema';
import { ProductSchema } from './schemas/ProductSchema';

const realmConfig = {
  schema: [UserSchema, ProductSchema],
  schemaVersion: 1,
  deleteRealmIfMigrationNeeded: true,
};

export default function getRealmInstance() {
  return Realm.open(realmConfig);
}