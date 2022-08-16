import { Serializer as ПозицияSerializer } from
  '../mixins/regenerated/serializers/i-i-s-tes-позиция';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПозицияSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
