import {format} from "date-fns";

export const yearDeclensionRu = (count: number): string => {
	if (count % 10 === 1 && count % 100 !== 11) {
		return `${count} год`;
	} else if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) {
		return `${count} года`;
	}
	return `${count} лет`;
}

export const yearDeclensionEn = (count: number): string => {
	return `${count} year${count !== 1 ? 's' : ''}`;
}

export const convertISOToDate = (isoDate: string): string => {
	const date = new Date(isoDate);
	return format(date, 'dd.MM.yyyy');
}

export const priceRu = (price: number): string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽')
