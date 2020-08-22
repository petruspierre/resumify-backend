const getAccentColor = (discipline: string) => {
  let accentColor = '#7C77B9';

  if (discipline === 'Biologia') { 
    accentColor = '#9FD8CB';
  } else if (discipline === 'Matemática') {
    accentColor = '#F02D3A';
  } else if (discipline === 'História') {
    accentColor = '#FFD791';
  } else if (discipline === 'Português') {
    accentColor = '#1D8A99';
  }

  return accentColor;
}

export default getAccentColor;
