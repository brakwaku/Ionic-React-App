import React from "react";
import { IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";

const InputControl: React.FC<{
  selectedValue: "mkg" | "ftlbs";
  onSelectValue: (value: "mkg" | "ftlbs") => void;
}> = ({ selectedValue, onSelectValue }) => {

    const inputChangeHandler = (event: CustomEvent) => {
        onSelectValue(event.detail.value);
    }
  return (
    <IonSegment value={selectedValue} onIonChange={inputChangeHandler}>
      <IonSegmentButton value="mkg">
        <IonLabel>m/kg</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="ftlbs">
        <IonLabel>ft/lds</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
};

export default InputControl;
