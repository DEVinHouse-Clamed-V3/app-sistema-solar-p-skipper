import React from "react";
import { Text, View, Image } from "react-native";
import { styles } from "./styleApp";

export function Planeta({ planeta }) {
  return (
    <View style={styles.planetaContainer}>
      <Text style={styles.planetaName}>{planeta.nome}</Text>
      <Image style={styles.imagePlaneta} source={{ uri: planeta.img }} />
      <View style={styles.justifyCenter}>
        <Text style={[styles.textColor, styles.bold]}>{planeta.descricaoBreve}</Text>
      </View>
      <View style={styles.planetaDetails}>
        <View style={styles.detailRow}>
          <Text style={styles.textColor}>Satelites:</Text>
          <Text style={styles.textColor}>{planeta.quantidadeSatelites}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.textColor}>Área da superfície:</Text>
          <Text style={styles.textColor}>{planeta.areaSuperficieKm2.toLocaleString()} km²</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.textColor}>Velocidade Média da Órbita:</Text>
          <Text style={styles.textColor}>{planeta.velocidadeOrbitalMediaKmS} km/s</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.textColor}>Tempo de Rotação:</Text>
          <Text style={styles.textColor}>{planeta.periodoRotacaoDias} d</Text>
        </View>
      </View>
        <View>
          <Text style={[styles.textColor, styles.descricao]}>"{planeta.descricao}"</Text>
        </View>
    </View>
  );
}
