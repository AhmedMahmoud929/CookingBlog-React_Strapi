import type { Struct, Schema } from '@strapi/strapi';

export interface TodoListListItem extends Struct.ComponentSchema {
  collectionName: 'components_todo_list_list_items';
  info: {
    displayName: 'ListItem';
    icon: 'check';
    description: '';
  };
  attributes: {
    header: Schema.Attribute.String & Schema.Attribute.Required;
    img: Schema.Attribute.Media<'images'>;
    body: Schema.Attribute.Text;
  };
}

export interface TodoListIngredients extends Struct.ComponentSchema {
  collectionName: 'components_todo_list_ingredients';
  info: {
    displayName: 'Ingredients';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    items: Schema.Attribute.Component<'todo-list.list-item', true>;
  };
}

export interface InfoListNutritionInfo extends Struct.ComponentSchema {
  collectionName: 'components_info_list_nutrition_infos';
  info: {
    displayName: 'nutritionInfo';
    icon: 'information';
  };
  attributes: {
    calories: Schema.Attribute.String & Schema.Attribute.Required;
    totalFat: Schema.Attribute.String & Schema.Attribute.Required;
    protein: Schema.Attribute.String & Schema.Attribute.Required;
    carbohydrate: Schema.Attribute.String & Schema.Attribute.Required;
    cholesterol: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'todo-list.list-item': TodoListListItem;
      'todo-list.ingredients': TodoListIngredients;
      'info-list.nutrition-info': InfoListNutritionInfo;
    }
  }
}
