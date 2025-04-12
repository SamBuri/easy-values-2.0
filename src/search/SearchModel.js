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
        key: () => this.column.key || '',
        operation: '',
        operator: 'AND',


    },
    searchOptions: {
        page: 0,
        pageSize: 100,
        searchCriteria: [],
    },

    searchCriteriaHeaders: [
        { title: "Operator", key: "operator", },
        { title: "Column", key: "column.title", },
        { title: "Operation", key: "operationObj.text", },
        { title: "Value", key: "value", },
        { title: "Value 2", key: "value2", },
        { title: "Actions", key: "actions", },
    ]

}

export default searchModel;

