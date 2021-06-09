import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html,body{
  background: #002329;
}
input[type=number]::-webkit-inner-spin-button {
  opacity: 0;
}
input[type=number]:hover::-webkit-inner-spin-button,
input[type=number]:focus::-webkit-inner-spin-button {
  opacity: 0.25;
}
/* width */
::-webkit-scrollbar {
  width: 20px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #2d313c;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #5b5f67;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #ffc53d;
}
.ant-slider-track, .ant-slider:hover .ant-slider-track {
  background-color: #2abdd2;
  opacity: 0.75;
}
.ant-slider-track,
.ant-slider ant-slider-track:hover {
  background-color: #faad14;
  opacity: 0.75;
}
.ant-slider-dot-active,
.ant-slider-handle,
.ant-slider-handle-click-focused,
.ant-slider:hover .ant-slider-handle:not(.ant-tooltip-open)  {
  border: 3px solid #faad14; 
}
.ant-table-tbody > tr.ant-table-row:hover > td {
  background: #002329;
}
.ant-table-tbody > tr > td {
  border-bottom: 5px solid #faad14;
}
.ant-table-container table > thead > tr:first-child th {
  border-bottom: none;
}
.ant-divider-horizontal.ant-divider-with-text::before, .ant-divider-horizontal.ant-divider-with-text::after {
  border-top: 2px solid #faad14 !important;
}
.ant-layout {
    background: #ffc53d;
  }
  .ant-table {
    background: #002766;
  }
  .ant-table-thead > tr > th {
    background: #120338;
  }
.ant-select-item-option-content {
  img {
    margin-right: 4px;
  }
}
.ant-modal-content {
  background-color: #002329;
}

@-webkit-keyframes highlight {
  from { background-color: #2abdd2;}
  to {background-color: #1A2029;}
}
@-moz-keyframes highlight {
  from { background-color: #2abdd2;}
  to {background-color: #1A2029;}
}
@-keyframes highlight {
  from { background-color: #2abdd2;}
  to {background-color: #1A2029;}
}
.flash {
  -moz-animation: highlight 0.5s ease 0s 1 alternate ;
  -webkit-animation: highlight 0.5s ease 0s 1 alternate;
  animation: highlight 0.5s ease 0s 1 alternate;
}`;
