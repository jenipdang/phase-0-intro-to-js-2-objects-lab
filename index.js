// Write your solution in this file!
const employee = {
    name: '',
    streetAddress: ''
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
   return {
       ...employee, [key]: value
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmpolyee = {...employee}
    delete newEmpolyee[key]
    return newEmpolyee

}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}
