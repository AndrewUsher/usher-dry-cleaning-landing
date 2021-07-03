// Props shared by all sections
const SectionShared = {
  defaults: {
    topOuterDivider: false,
    bottomOuterDivider: false,    
    topDivider: false,
    bottomDivider: false,
    hasBgColor: false,
    invertColor: false
  }
}

// Default section props
export const SectionProps = {
  types: {
    ...SectionShared.types
  },
  defaults: {
    ...SectionShared.defaults
  }
}

// Section split props
export const SectionSplitProps = {
  defaults: {
    ...SectionShared.defaults,
    invertMobile: false,
    invertDesktop: false,
    alignTop: false,
    imageFill: false
  }
}

// Section tiles props
export const SectionTilesProps = {
  defaults: {
    ...SectionShared.defaults,
    pushLeft: false
  }
}