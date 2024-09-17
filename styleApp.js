import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#151718",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    alignItems: "center",
    padding: 16,
    backgroundColor: "#151718",
    borderBottomColor: "#f0f0f0",
    borderBottomWidth: 1,
  },
  headerText: {
    color: "#f0f0f0",
    fontSize: 18,
    fontWeight: "bold",
  },
  scrollViewContainer: {
    padding: 10,
  },
  imagePlaneta: {
    width: "100%",
    height: 200,
    marginVertical: 10,
  },
  planetaContainer: {
    backgroundColor: "#222",
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
  },
  planetaName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#f0f0f0",
  },
  planetaDetails: {
    marginTop: 10,
    marginBottom: 10,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  textColor: {
    color: "#e0e0e0",
  },
  justifyCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  descricao: {
    marginBottom: 10,
  },
  bold: {
    fontWeight: "bold",
  },
});
