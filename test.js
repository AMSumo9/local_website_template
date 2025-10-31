
// src/components/Seo.astro
// Handles meta tags, canonical, OG, Twitter, and JSON-LD Schema
import { Organization, WebPage, BreadcrumbList, LocalBusiness, FinancialService, Article, FAQPage, Service } from 'schema-dts'; // Import necessary types

export interface Props {
    data: {
        site: Record<string, any>;
        page: Record<string, any>;
        canonicalUrl: string;
    }
}

const { data } = Astro.props;
const site = data.site;
const page = data.page;
const canonicalUrl = data.canonicalUrl;

// 
