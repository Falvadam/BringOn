const { model, Schema } = require('mongoose')

const pcSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: String,
  classification: {
    type: String,
    enum: ['PREMIO', 'CONCURSO']
  },
  field: {
    type: String,
    required: true,
    enum: ['literatura', 'arteycultura', 'cienciaytecnologia', 
    'emprendimiento', 'educacion', 'otros']
  },
  endDate: {
    type: Date
  },
  prize: {
    type: String,
    required: true
  },
  prizeCurrency: {
    type: String,
    enum: ['MXN', 'USD', 'EUR'],
    default: 'MXN',
    required: true
  },
  link: {
    type: String,
    required: true
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }]
},{
  timestamps: false,
  versionKey: false
}
)

module.exports = model('PC', pcSchema)