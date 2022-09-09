import { Input, Button, Select, Textarea } from 'react-rainbow-components'
import { useState } from 'react'

const GuideDesignForm = ({ formValues, setFormValues, selectedEdit }) => {
  const casOptions = [
    { value: 'SpCas9', label: 'SpCas9' },
    { value: 'SaCas9', label: 'SaCas9' },
    { value: 'Cas12a', label: 'Cas12a (Cpf1)' }
  ]
  const strandOptions = [
    { value: '+', label: 'forward' },
    { value: '-', label: 'reverse' }
  ]

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  return (
    <form className="DesignForm">
      <Input
        // onChange={handleChange}
        value={formValues.gene}
        name="gene"
        type="text"
        placeholder="gene target"
        required
      />
      <Select
        // onChange={handleChange}
        name="cas"
        placeholder={casOptions[0].value}
        options={casOptions}
      />
      <Select
        // onChange={handleChange}
        name="strand"
        placeholder={strandOptions[0].value}
        options={strandOptions}
      />
      <Textarea
        // onChange={handleChange}
        name="sequence"
        // placeholder={formData.sequence}
        value={formValues.sequence}
        required
      />
      <Button
      // disabled={
      //   !formValues.gene ||
      //   !formValues.username ||
      //   !formValues.cas ||
      //   !formValues.sequence
      // }
      >
        Submit
      </Button>
    </form>
  )
}

export default GuideDesignForm
