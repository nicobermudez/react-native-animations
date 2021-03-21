import styled from "@emotion/native";
import { colors } from "../constants";

export const Title = styled.Text({
    color: colors.text,
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 28,
});

export const SubTitle = styled.Text({
    color: colors.text,
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 18,
});

export const Description = styled.Text({
    fontSize: 18,
    color: colors.text,
    lineHeight: 24,
    marginBottom: 4,
});
