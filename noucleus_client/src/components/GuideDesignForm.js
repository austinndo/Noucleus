import { Input, Button, Select, Textarea } from 'react-rainbow-components'
import { useState } from 'react'

const GuideDesignForm = ({ formData, selectedEdit }) => {
  const casOptions = [
    { value: 'SpCas9', label: 'SpCas9' },
    { value: 'SaCas9', label: 'SaCas9' },
    { value: 'Cas12a', label: 'Cas12a (Cpf1)' }
  ]
  const strandOptions = [
    { value: '+', label: 'forward' },
    { value: '-', label: 'reverse' }
  ]

  const [formValues, setFormValues] = useState({
    gene: formData.data.gene,
    username: '',
    sequence: formData.data.sequence,
    strand: formData.strand,
    cas: formData.cas,
    edit_type: selectedEdit
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  return (
    <form className="DesignForm">
      <Input
        onChange={handleChange}
        name="gene"
        type="text"
        placeholder="gene target"
        value={formValues.gene}
        required
      />
      <Select
        onChange={handleChange}
        name="cas"
        placeholder={formData.cas}
        options={casOptions}
      />
      <Select
        onChange={handleChange}
        name="strand"
        placeholder={formData.strand}
        options={strandOptions}
      />
      <Textarea
        onChange={handleChange}
        name="sequence"
        placeholder={formData.sequence}
        value={formValues.sequence}
        required
      />
      <Button
        className="form-btn"
        disabled={
          !formValues.gene ||
          !formValues.username ||
          !formValues.cas ||
          !formValues.sequence
        }
        onClick={() => console.log('handleSubmit here')}
      >
        Submit
      </Button>
    </form>
  )
}

export default GuideDesignForm
