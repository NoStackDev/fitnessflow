import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends React.SVGProps<SVGSVGElement> {}

const LogoIcon = forwardRef<SVGSVGElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        width="176"
        height="32"
        viewBox="0 0 176 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        className={twMerge(className)}
        {...props}
      >
        <path
          d="M32.76 23V10.04H40.68V12.488H35.208V15.296H39.6V17.744H35.208V23H32.76ZM42.4849 11.93V9.77H44.9329V11.93H42.4849ZM42.4849 23V13.28H44.9329V23H42.4849ZM53.4631 23C52.7911 23.126 52.1311 23.18 51.4831 23.162C50.8411 23.15 50.2651 23.039 49.7551 22.829C49.2511 22.613 48.8671 22.268 48.6031 21.794C48.3631 21.35 48.2371 20.9 48.2251 20.444C48.2131 19.982 48.2071 19.46 48.2071 18.878V10.58H50.6551V18.734C50.6551 19.112 50.6581 19.454 50.6641 19.76C50.6761 20.06 50.7391 20.3 50.8531 20.48C51.0691 20.822 51.4141 21.008 51.8881 21.038C52.3621 21.068 52.8871 21.044 53.4631 20.966V23ZM46.5511 15.17V13.28H53.4631V15.17H46.5511ZM62.2531 23V18.41C62.2531 18.188 62.2411 17.906 62.2171 17.564C62.1931 17.216 62.1181 16.868 61.9921 16.52C61.8661 16.172 61.6591 15.881 61.3711 15.647C61.0891 15.413 60.6871 15.296 60.1651 15.296C59.9551 15.296 59.7301 15.329 59.4901 15.395C59.2501 15.461 59.0251 15.59 58.8151 15.782C58.6051 15.968 58.4311 16.244 58.2931 16.61C58.1611 16.976 58.0951 17.462 58.0951 18.068L56.6911 17.402C56.6911 16.634 56.8471 15.914 57.1591 15.242C57.4711 14.57 57.9391 14.027 58.5631 13.613C59.1931 13.199 59.9851 12.992 60.9391 12.992C61.7011 12.992 62.3221 13.121 62.8021 13.379C63.2821 13.637 63.6541 13.964 63.9181 14.36C64.1881 14.756 64.3801 15.17 64.4941 15.602C64.6081 16.028 64.6771 16.418 64.7011 16.772C64.7251 17.126 64.7371 17.384 64.7371 17.546V23H62.2531ZM55.6111 23V13.28H57.7891V16.502H58.0951V23H55.6111ZM71.4147 23.27C70.4187 23.27 69.5397 23.057 68.7777 22.631C68.0217 22.199 67.4277 21.608 66.9957 20.858C66.5697 20.102 66.3567 19.238 66.3567 18.266C66.3567 17.204 66.5667 16.28 66.9867 15.494C67.4067 14.708 67.9857 14.099 68.7237 13.667C69.4617 13.229 70.3107 13.01 71.2707 13.01C72.2907 13.01 73.1577 13.25 73.8717 13.73C74.5857 14.21 75.1137 14.885 75.4557 15.755C75.7977 16.625 75.9177 17.648 75.8157 18.824H73.3947V17.924C73.3947 16.934 73.2357 16.223 72.9177 15.791C72.6057 15.353 72.0927 15.134 71.3787 15.134C70.5447 15.134 69.9297 15.389 69.5337 15.899C69.1437 16.403 68.9487 17.15 68.9487 18.14C68.9487 19.046 69.1437 19.748 69.5337 20.246C69.9297 20.738 70.5087 20.984 71.2707 20.984C71.7507 20.984 72.1617 20.879 72.5037 20.669C72.8457 20.459 73.1067 20.156 73.2867 19.76L75.7347 20.462C75.3687 21.35 74.7897 22.04 73.9977 22.532C73.2117 23.024 72.3507 23.27 71.4147 23.27ZM68.1927 18.824V17.006H74.6367V18.824H68.1927ZM81.6459 23.27C80.4219 23.27 79.4319 22.994 78.6759 22.442C77.9259 21.884 77.4699 21.098 77.3079 20.084L79.8099 19.706C79.9119 20.162 80.1369 20.519 80.4849 20.777C80.8389 21.035 81.2859 21.164 81.8259 21.164C82.2699 21.164 82.6119 21.08 82.8519 20.912C83.0919 20.738 83.2119 20.498 83.2119 20.192C83.2119 20 83.1639 19.847 83.0679 19.733C82.9719 19.613 82.7559 19.496 82.4199 19.382C82.0899 19.268 81.5739 19.118 80.8719 18.932C80.0799 18.728 79.4469 18.5 78.9729 18.248C78.4989 17.996 78.1569 17.696 77.9469 17.348C77.7369 16.994 77.6319 16.568 77.6319 16.07C77.6319 15.446 77.7909 14.906 78.1089 14.45C78.4269 13.988 78.8739 13.634 79.4499 13.388C80.0319 13.136 80.7159 13.01 81.5019 13.01C82.2639 13.01 82.9389 13.127 83.5269 13.361C84.1149 13.595 84.5889 13.928 84.9489 14.36C85.3149 14.792 85.5399 15.302 85.6239 15.89L83.1219 16.34C83.0799 15.98 82.9239 15.695 82.6539 15.485C82.3839 15.275 82.0179 15.152 81.5559 15.116C81.1059 15.086 80.7429 15.146 80.4669 15.296C80.1969 15.446 80.0619 15.662 80.0619 15.944C80.0619 16.112 80.1189 16.253 80.2329 16.367C80.3529 16.481 80.5959 16.598 80.9619 16.718C81.3339 16.838 81.8979 16.994 82.6539 17.186C83.3919 17.378 83.9829 17.603 84.4269 17.861C84.8769 18.113 85.2039 18.419 85.4079 18.779C85.6119 19.133 85.7139 19.562 85.7139 20.066C85.7139 21.062 85.3539 21.845 84.6339 22.415C83.9139 22.985 82.9179 23.27 81.6459 23.27ZM91.4896 23.27C90.2656 23.27 89.2756 22.994 88.5196 22.442C87.7696 21.884 87.3136 21.098 87.1516 20.084L89.6536 19.706C89.7556 20.162 89.9806 20.519 90.3286 20.777C90.6826 21.035 91.1296 21.164 91.6696 21.164C92.1136 21.164 92.4556 21.08 92.6956 20.912C92.9356 20.738 93.0556 20.498 93.0556 20.192C93.0556 20 93.0076 19.847 92.9116 19.733C92.8156 19.613 92.5996 19.496 92.2636 19.382C91.9336 19.268 91.4176 19.118 90.7156 18.932C89.9236 18.728 89.2906 18.5 88.8166 18.248C88.3426 17.996 88.0006 17.696 87.7906 17.348C87.5806 16.994 87.4756 16.568 87.4756 16.07C87.4756 15.446 87.6346 14.906 87.9526 14.45C88.2706 13.988 88.7176 13.634 89.2936 13.388C89.8756 13.136 90.5596 13.01 91.3456 13.01C92.1076 13.01 92.7826 13.127 93.3706 13.361C93.9586 13.595 94.4326 13.928 94.7926 14.36C95.1586 14.792 95.3836 15.302 95.4676 15.89L92.9656 16.34C92.9236 15.98 92.7676 15.695 92.4976 15.485C92.2276 15.275 91.8616 15.152 91.3996 15.116C90.9496 15.086 90.5866 15.146 90.3106 15.296C90.0406 15.446 89.9056 15.662 89.9056 15.944C89.9056 16.112 89.9626 16.253 90.0766 16.367C90.1966 16.481 90.4396 16.598 90.8056 16.718C91.1776 16.838 91.7416 16.994 92.4976 17.186C93.2356 17.378 93.8266 17.603 94.2706 17.861C94.7206 18.113 95.0476 18.419 95.2516 18.779C95.4556 19.133 95.5576 19.562 95.5576 20.066C95.5576 21.062 95.1976 21.845 94.4776 22.415C93.7576 22.985 92.7616 23.27 91.4896 23.27Z"
          fill="#F97316"
        />
        <path
          d="M135.407 7C133.127 7 130.407 7.86667 130.407 12V20C130.407 24.1333 133.127 25 135.407 25C137.687 25 140.407 24.1333 140.407 20V12C140.407 7.86667 137.687 7 135.407 7ZM121.593 7C119.313 7 116.593 7.86667 116.593 12V20C116.593 24.1333 119.313 25 121.593 25C123.873 25 126.593 24.1333 126.593 20V12C126.593 7.86667 123.873 7 121.593 7ZM130.407 15H126.593V17H130.407V15ZM142.5 20.3333C141.953 20.3333 141.5 19.88 141.5 19.3333V12.6667C141.5 12.12 141.953 11.6667 142.5 11.6667C143.047 11.6667 143.5 12.12 143.5 12.6667V19.3333C143.5 19.88 143.047 20.3333 142.5 20.3333ZM114.5 20.3333C113.953 20.3333 113.5 19.88 113.5 19.3333V12.6667C113.5 12.12 113.953 11.6667 114.5 11.6667C115.047 11.6667 115.5 12.12 115.5 12.6667V19.3333C115.5 19.88 115.047 20.3333 114.5 20.3333Z"
          fill="#F97316"
        />
      </svg>
    );
  }
);

export default LogoIcon;
