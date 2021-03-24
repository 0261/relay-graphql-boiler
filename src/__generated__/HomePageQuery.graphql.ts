/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type HomePageQueryVariables = {
    id: number;
};
export type HomePageQueryResponse = {
    readonly user: {
        readonly id: string;
    };
};
export type HomePageQuery = {
    readonly response: HomePageQueryResponse;
    readonly variables: HomePageQueryVariables;
};



/*
query HomePageQuery(
  $id: Int!
) {
  user(id: $id) {
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "user",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "HomePageQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "HomePageQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "8595023509bcc155849b821756419f5c",
    "id": null,
    "metadata": {},
    "name": "HomePageQuery",
    "operationKind": "query",
    "text": "query HomePageQuery(\n  $id: Int!\n) {\n  user(id: $id) {\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '1705d6f72f094abc10833e562c18b98f';
export default node;
