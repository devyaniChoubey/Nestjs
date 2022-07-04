import { SelectQueryBuilder } from "typeorm";

export function buildQueryBuilder(
    filter: string,
    queryBuilder: SelectQueryBuilder<any>,
    table = '',
    alias: any = {},
  ): SelectQueryBuilder<any> {
  
    const filterJson = JSON.parse(filter);
    const whereFilter = filterJson['where'];
    if (whereFilter) {
      whereFilter.forEach(function (condition) {
        if (alias[condition.key]) {
          condition.key = alias[condition.key];
        } else {
          condition.key = table + condition.key;
        }
  
        if (condition.isSearch) {
          queryBuilder.andWhere(
            condition.key + " like '%" + condition.value + "%' ",
          );
        } else {
          queryBuilder.andWhere(
            condition.key + " = '" + condition.value + "' ",
          );
        }
      });
    }
    if (filterJson['orderBy']) {
      let sortField = filterJson['orderBy'].split(' ')[0];
      if (alias[sortField]) {
        sortField = alias[sortField];
      } else {
        sortField = table + sortField;
      }
      queryBuilder.orderBy(sortField, filterJson['orderBy'].split(' ')[1]);
    }
    return queryBuilder;
  }