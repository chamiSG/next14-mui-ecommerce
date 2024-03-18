export const getActiveRouteColor = (active: string, page: string) => {
  if (active === page.toLowerCase()) {
    return 'secGray.main'
  }
  return 'secGray.light'
}

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export const formartPrice = (price: any) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  return formatter.format(price);

}
