// Utility functions for calculations and data processing

/**
 * Calculate the utilization rate.
 * @param {number} production - The production value.
 * @param {number} capacity - The capacity value.
 * @returns {number} - The utilization rate as a percentage.
 */
function calculateUtilizationRate(production, capacity) {
    return (production / capacity) * 100;
}

/**
 * Format a number as currency.
 * @param {number} value - The value to format.
 * @param {string} [currency='€'] - The currency symbol.
 * @returns {string} - The formatted currency string.
 */
function formatCurrency(value, currency = '€') {
    return `${currency}${value.toLocaleString()}`;
}

/**
 * Calculate the percentage change between two values.
 * @param {number} oldValue - The old value.
 * @param {number} newValue - The new value.
 * @returns {number} - The percentage change.
 */
function calculatePercentageChange(oldValue, newValue) {
    return ((newValue - oldValue) / oldValue) * 100;
}
