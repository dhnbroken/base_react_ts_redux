import React from "react";
import "./button.css";
import { Spinner } from "../spinners/Spinner";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large" | "xlarge" | "xxlarge";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Button Disabled
   */
  isDisabled?: boolean;
  /**
   * Button loading state spinner
   */
  isLoading?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  isDisabled = false,
  isLoading = false,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={[
        "storybook-button",
        `storybook-button--${size}`,
        mode,
        isDisabled || isLoading ? "storybook-button-disabled" : "",
      ].join(" ")}
      style={{ backgroundColor }}
      disabled={isDisabled}
      {...props}
    >
      {isLoading ? (
        <div className="storybook-button-spinner">
          <Spinner size={20} color="#fff" />
        </div>
      ) : (
        label
      )}
    </button>
  );
};
