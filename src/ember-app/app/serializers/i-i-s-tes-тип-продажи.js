import { Serializer as ТипПродажиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-tes-тип-продажи';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТипПродажиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
