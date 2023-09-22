import { LANDING_PAGE_PATH } from '../../../Constants/Constants'
import { staticData } from '../../../Constants/staticData'
import { TextLink } from '../../Other/TextLink'
import { FooterSection } from './FooterSection'

export const FooterSections = [
  { columnLinks: staticData.footerData.firstColumn, className: 'odd-link' },
  { columnLinks: staticData.footerData.secondColumn, className: 'first-link' },
  { columnLinks: staticData.footerData.thirdColumn, className: 'first-link' },
]

export const Footer = () => (
  <div className="footer">
    <div className="footer-center">
      <section className="footer-section virkdk-container">
        <TextLink
          path={LANDING_PAGE_PATH}
          text="Virk.dk"
          virkdk
        />
      </section>
      {FooterSections.map(({ columnLinks, className }, index) => (
        <FooterSection
          key={className + index}
          columnLinks={columnLinks}
          className={className}
        />
      ))}
    </div>
  </div>
)
