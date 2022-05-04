import moment from 'moment';

export interface TypedTransformer<TEntity, TDatabase> {
  to: (entityValue: TEntity) => TDatabase;
  from: (databaseValue: TDatabase) => TEntity;
}

const dateTransformer: TypedTransformer<Date, string> = {
  to: (value: Date | string) => {
    if (typeof value === 'string') return value;
    const inUTCFormat = moment.utc(value).format('YYYY-MM-DD HH:mm:ss');
    return inUTCFormat;
  },
  from: (value: string) => {
    const d = moment(value);
    return new Date(Date.UTC(d.year(), d.month(), d.date(), d.hour(), d.minute(), d.second()));
  },
};

export default dateTransformer;
