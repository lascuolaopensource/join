/// <reference path="../pb_data/types.d.ts" />

migrate((db) => {
  const dao = new Dao(db);
  const typesCollection = dao.findCollectionByNameOrId(
    "payments_billing_data_type"
  );

  for (const type of types) {
    const record = new Record(typesCollection, type);
    dao.saveRecord(record);
  }
});

/**
 * @typedef {import('../../frontend/src/lib/pocketbase/types').PaymentsBillingDataTypeRecord} PaymentsBillingDataType
 */
/**
 * @type {PaymentsBillingDataType[]}
 */
const types = [
  {
    name: "company",
    schema: `{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "payments_billing_data_type_company",
    "title": "Company",
    "description": "Billing information required for a company",
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      },
      "partita_iva": {
        "type": "string"
      },
      "sdi_code": {
        "type": "string"
      },
      "pec": {
        "type": "string"
      }
    },
    "required": [
      "name",
      "partita_iva",
      "sdi_code",
      "pec"
    ]
}`,
  },
  {
    name: "person",
    schema: `{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "payments_billing_data_type_person",
    "title": "Person",
    "description": "Billing information required for a person",
    "type": "object",
    "properties": {
        "name": {
        "type": "string"
        },
        "surname": {
        "type": "string"
        },
        "fiscal_code": {
        "type": "string"
        },
        "email": {
        "type": "string"
        }
    },
    "required": [
        "name",
        "surname",
        "fiscal_code",
        "email"
    ]
}`,
  },
];
