const searchModel = {
    searchOperations: [
        { text: "Equal", value: "EQUAL" },
        { text: "Like", value: "LIKE" },
        { text: "Greater", value: "GREATER" },
        { text: "Greater Than or Equal", value: "GREATER_THAN_OR_EQUAL" },
        { text: "Less", value: "LESS" },
        { text: "Less Than Or Equal", value: "LESS_THAN_OR_EQUAL" },
        { text: "Between", value: "BETWEEN" },
        { text: "Between Inclusive", value: "BETWEEN_INCLUSIVE" },
        { text: "Begins With", value: "BEGINS_WITH" },
        { text: "Ends With", value: "ENDS_WITH" },
        { text: "Not Equal", value: "NOT_EQUAL" },
        { text: "In", value: "IN" },
        { text: "Not In", value: "NOT_IN" }
    ],

    searchOperators: [
        "AND",
        "OR"
    ],

    aggreagtes: [
        "Sum",
        "Avg",
        "Max",
        "Min",
    ],


    searchCriterion: {
        column: null,
        operationObj: null,
        value: '',
        value2: '',
        key: ()=>this.column.key||'',
        operation: '',
        operator: 'AND',


    },
    searchOptions: {
        page: 0,
        pageSize: 100,
        searchCriteria: [],
    },

    searchCriteriaHeaders: [
         { title: "Operator", value: "operator", label: "Operator", field: "operator" },
        { title: "Column", value: "column.title", label: "Column", field: "column.text"},
        { title: "Operation", value: "operationObj.text", label: "Operation", field: "operationObj.text" },
        { title: "Value", value: "value", label: "Value", field: "value" },
        { text: "Value 2", value: "value2", label: "Value 2", field: "value2" },
        { title: "Actions", value: "actions", label: "Actions", field: "actions"},
    ]

}

export default searchModel;

