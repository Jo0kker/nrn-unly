import { Markdown } from './Markdown';

/**
 * I18n markdown field auto computed by our own algorithm
 * (we don't use the Airtable field, it is calculated again instead in "sanitizeRecord")
 */
export type I18nMarkdown = Markdown;
