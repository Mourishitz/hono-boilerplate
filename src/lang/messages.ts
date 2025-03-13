const messages: { [key: string]: { [key: string]: string } } = {
  // Portuguese 
  pt: {
    // Start of validation
    'The :field field is required': 'O campo :field é obrigatório',
    'The :field field must be a string': 'O campo :field deve ser uma string',
    'The :field field must be a valid email address': 'O campo :field deve ser um endereço de e-mail válido',
    'The :field field must be a valid JWT token': 'O campo :field deve ser um token JWT válido',
    'The :field field must be a valid URL': 'O campo :field deve ser um URL válido',
    'The :field field and :otherField field must be the same': 'Os campos :field e :otherField devem ser iguais',
    'The :field field and :otherField field must be different': 'Os campos :field e :otherField devem ser diferentes',

    'The value must be a boolean': 'O valor deve ser um booleano',

    'The :field field must be a number': 'O campo :field deve ser um número',
    'The selected :field is not in :values': 'O :field selecionado não está em :values',
    'The :field field must be at least :min': 'O campo :field deve ter pelo menos :min',
    'The :field field must not be greater than :max': 'O campo :field não deve ser maior que :max',
    'The :field field must be between :min and :max': 'O campo :field deve estar entre :min e :max',
    'The :field field must be positive': 'O campo :field deve ser positivo',
    'The :field field must be negative': 'O campo :field deve ser negativo',
    'The :field field must have :digits decimal places': 'O campo :field deve ter :digits casas decimais',
    'The :field field must be an integer': 'O campo :field deve ser um número inteiro',

    'The :field field must be accepted': 'O campo :field deve ser aceito',

    'The :field field must be :expectedValue': 'O campo :field deve ser :expectedValue',

    'The :field field must be an object': 'O campo :field deve ser um objeto',

    'The :field field must be an array': 'O campo :field deve ser um array',
    'The :field field must have at least :min items': 'O campo :field deve ter pelo menos :min itens',
    'The :field field must not have more than :max items': 'O campo :field não deve ter mais de :max itens',
    'The :field field must contain :size items': 'O campo :field deve conter :size itens',
    'The :field field must not be empty': 'O campo :field não deve estar vazio',
    'The :field field has duplicate values': 'O campo :field tem valores duplicados',

    'Invalid value provided for :field field': 'Valor inválido fornecido para o campo :field',

    'The :field field must be a datetime value': 'O campo :field deve ser um valor de data e hora',
    'The :field field must be a date equal to :expectedValue': 'O campo :field deve ser uma data igual a :expectedValue',
    'The :field field must be a date after :expectedValue': 'O campo :field deve ser uma data após :expectedValue',
    'The :field field must be a date before :expectedValue': 'O campo :field deve ser uma data antes de :expectedValue',
    'The :field field must be a date after or equal to :expectedValue': 'O campo :field deve ser uma data após ou igual a :expectedValue',
    'The :field field must be a date before or equal to :expectedValue': 'O campo :field deve ser uma data antes ou igual a :expectedValue',

    'The :field field must be a date after :otherField': 'O campo :field deve ser uma data após :otherField',
    'The :field field must be a date after or same as :otherField': 'O campo :field deve ser uma data após ou igual a :otherField',
    'The :field field must be a date before :otherField': 'O campo :field deve ser uma data antes de :otherField',
    'The :field field must be a date before or same as :otherField': 'O campo :field deve ser uma data antes ou igual a :otherField',

    'The :field field is not a weekend': ':field não é um fim de semana',
    'The :field field is not a weekday': ':field não é um dia da semana',
    // end of validation messages

    // start of message errors
    'The given data was invalid': 'Os dados fornecidos são inválidos',
    'Unauthorized': 'Não autorizado',
    'Error: Private key not found': 'Erro: Chave privada não encontrada',
    'Unauthorized: Algorithm not implemented': 'Não autorizado: Algoritmo não implementado',
    'Unauthorized: Invalid token': 'Não autorizado: Token inválido',
    'Unauthorized: Token not yet valid': 'Não autorizado: Token ainda não válido',
    'Unauthorized: Token expired': 'Não autorizado: Token expirado',
    'Unauthorized: Token issued in the future': 'Não autorizado: Token emitido no futuro',
    'Unauthorized: Invalid header': 'Não autorizado: Cabeçalho inválido',
    'Unauthorized: Token signature mismatched': 'Não autorizado: Assinatura do token não corresponde',
  },
};

export default messages
