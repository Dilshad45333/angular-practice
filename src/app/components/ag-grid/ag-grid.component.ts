import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
@Component({
  selector: 'app-ag-grid',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './ag-grid.component.html',
  styleUrl: './ag-grid.component.scss'
})
export class AgGridComponent {
	
  columnDefs: ColDef[] = [
		{ headerName: 'Make', field: 'make',filter: true, floatingFilter: true  },
		{ headerName: 'Model', field: 'model' ,editable: true, cellEditor: 'agSelectCellEditor',
			cellEditorParams: {
				values: ['Tesla', 'Ford', 'Toyota'],
			},},
		{ headerName: 'Price', field: 'price' ,filter: true, floatingFilter: true }
	];

	rowData = [
		{ make: 'Toyota', model: 'Celica', price: 35000 },
		{ make: 'Ford', model: 'Mondeo', price: 32000 },
		{ make: 'Porsche', model: 'Boxster', price: 72000 }
	];
ngOnInit(){
	
}
    pagination = true;
	paginationPageSize = 500;
	paginationPageSizeSelector = [200, 500, 1000];
	
}
