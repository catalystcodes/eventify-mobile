import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import PageHeader from "../components/atoms/PageHeader";
import { EventOverviewStackParams } from "../utils/types";
import { RouteProp, useRoute } from "@react-navigation/native";
import TemplateOne from "./TemplateOne";
import TemplateTwo from "./TemplateTwo";
import TemplateThree from "./TemplateThree";
import TemplateFour from "./TemplateFour";
import TemplateFive from "./TemplateFive";
import TemplateSix from "./TemplateSix";
import TemplateSeven from "./TemplateSeven";
import TemplateEight from "./TemplateEight";

type CustomizeDetailsRouteProp = RouteProp<
  EventOverviewStackParams,
  "customizeDetails"
>;

const CustomizeDetailsScreen = () => {
  const route = useRoute<CustomizeDetailsRouteProp>();
  const { templateId, name: initialName, image } = route.params;
  const [name, setName] = useState(initialName);

  const renderTemplate = () => {
    switch (templateId) {
      case 1:
        return <TemplateOne name={name} setName={setName} image={image} />;
      case 2:
        return <TemplateTwo name={name} setName={setName} image={image} />;
      case 3:
        return <TemplateThree name={name} setName={setName} image={image} />;
      case 4:
        return <TemplateFour name={name} setName={setName} image={image} />;
      case 5:
        return <TemplateFive name={name} setName={setName} image={image} />;
      case 6:
        return <TemplateSix name={name} setName={setName} image={image} />;
      case 7:
        return <TemplateSeven name={name} setName={setName} image={image} />;
      case 8:
        return <TemplateEight name={name} setName={setName} image={image} />;

      default:
        return <TemplateOne name={name} setName={setName} image={image} />;
    }
  };

  return <>{renderTemplate()}</>;
};

const styles = StyleSheet.create({});

export default CustomizeDetailsScreen;
