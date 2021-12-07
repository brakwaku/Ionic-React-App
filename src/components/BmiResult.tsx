import React from "react";
import { IonCard, IonCardContent, IonCol, IonRow } from "@ionic/react";

const BmiResult: React.FC<{ result: number }> = ({ result }) => {
  return (
    <IonRow>
      <IonCol>
        <IonCard>
          <IonCardContent className="ion-text-ceter">
            <h2>Your Body-Mass-Index</h2>
            <h3>{result.toFixed(2)}</h3>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
};

export default BmiResult;
