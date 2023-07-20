import { useEffect } from 'react'

const Glossary = ({ setSidebarPage }) => {
  useEffect(() => {
    setSidebarPage('Glossary')
  }, [])

  return (
    <div className="GlossaryPage">
      <h2>Glossary Page</h2>
      <div className="GlossaryContent">
        <img src="https://www.researchgate.net/publication/360697370/figure/fig1/AS:1175393352589322@1657247021995/The-simple-visualization-of-gene-editing-by-CRISPR-Cas9-gene-editing-technique-The-gene.jpg" />
        <h2>
          CRISPR: (Clustered Regularly Interspaced Short Palindromic Repeats)
        </h2>
        <h4>
          Clusters of genetic information. Some bacteria can use these to detect
          and destroy viruses. (Similar to how one might get vaccinated to
          protect against viruses) (Jinek, et al. Science 2012)
        </h4>
        <h2> Cas9:</h2>
        <h4>
          a CRISPR-associated (Cas) endonuclease, or enzyme, that acts as
          “molecular scissors” to cut DNA at a location specified by a guide RNA
          Deoxyribonucleic acid (DNA): the molecule that most organisms use to
          store genetic information, which contains the “instructions for life”
        </h4>
        <h2>RNA (Ribonucleic acid): </h2>
        <h4>
          a molecule related to DNA that living things use for a number of
          purposes, including transporting and reading the DNA “instructions”
        </h4>
        <h2>Guide RNA (gRNA):</h2>{' '}
        <h4>
          a type of RNA molecule that binds to Cas9 and specifies, based on the
          sequence of the gRNA, the location at which Cas9 will cut DNA
        </h4>
        <h2>GC Content / GC %:</h2>{' '}
        <h4>
          amount of G's and C's present in the guide RNA. GC contents that are
          either too low or high resulted in lower cleavage efficiency. A GC
          content of 40-60% is ideal.
        </h4>
        <h2>More Info:</h2>
        <a href="http://www.crisprtx.com/gene-editing/crispr-cas9">
          Crispr Tx Crispr Cas9
        </a>
      </div>
      <h2></h2>
      <h2></h2>
      <h2></h2>
      <h2></h2>
    </div>
  )
}

export default Glossary
