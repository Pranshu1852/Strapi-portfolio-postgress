import type { Schema, Struct } from '@strapi/strapi';

export interface SharedSkill extends Struct.ComponentSchema {
  collectionName: 'components_shared_skills';
  info: {
    displayName: 'skill';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    percentage: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface SharedTimeline extends Struct.ComponentSchema {
  collectionName: 'components_shared_timelines';
  info: {
    displayName: 'timeline';
  };
  attributes: {
    organization: Schema.Attribute.String & Schema.Attribute.Required;
    period: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.skill': SharedSkill;
      'shared.timeline': SharedTimeline;
    }
  }
}
