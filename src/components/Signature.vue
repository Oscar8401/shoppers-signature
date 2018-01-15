<template>
	<div id="signature__copy">
		<table cellpadding="0" cellspacing="0" width="300" style="border: 0px; margin: 0px; padding: 0px 10px;">
			<tbody>
				<tr>
					<td style="vertical-align: top;">
						<center>
							<table cellpadding="0" cellspacing="0" width="300">
								<tbody>
									<tr>
										<td>
											<table cellpadding="0" cellspacing="0" width="300">
												<tbody>
													<tr>
														<td style="font-family: Arial, Helvetica, sans-serif;">
															<table width="300" cellpadding="0" cellspacing="0">
																<tbody>
																	<tr>
																		<td>
																			<table width="300" cellpadding="0" cellspacing="0" style="border: none;">
																				<tbody>
																					<tr>
																						<td width="300" height="20" style="padding-bottom: 15px;">
																							<a href="https://theshoppers.com/" style="display: block;">
																								<img src="https://raw.githubusercontent.com/jlozovei/shoppers-signature/vue-webpack/assets/shoppers-logo.png" alt="" style="max-width: 100%; width: 208px; height: auto; display: block;">
																							</a>
																						</td>
																					</tr>
																					<tr>
																						<td style="color: rgb(51, 51, 51); padding-bottom: 2px;">
																							<span style="font-family: &quot;Roboto&quot;, Arial, Helvetica, sans-serif; font-size: 22px; font-weight: 700; text-transform: uppercase; letter-spacing: -0.4px; line-height: 28px;">{{name}}</span>
																						</td>
																					</tr>
																					<tr>
																						<td style="color: rgb(51, 51, 51); padding-bottom: 5px;">
																							<span style="font-family: &quot;Roboto&quot;, Arial, Helvetica, sans-serif; font-size: 18px; font-weight: 100; letter-spacing: -0.4px;">{{position}}</span>
																						</td>
																					</tr>
																					<tr>
																						<td style="padding-top: 4px;">
																							<img src="https://raw.githubusercontent.com/jlozovei/shoppers-signature/vue-webpack/assets/phone.png" alt="" style="max-width: 16px; width: 16px; height: 16px;">
																							<span class="tel" style="padding-left: 8px; font-family: &quot;Roboto&quot;, Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 300; letter-spacing: 0.4px; color: rgb(51, 51, 51); vertical-align: middle; text-decoration: none;">
																								<a :href="linkPhone" style="font-family: &quot;Roboto&quot;, Arial, Helvetica, sans-serif; font-size: 16px; font-weight: 100; letter-spacing: -0.4px; color: rgb(51, 51, 51); text-decoration: none;">{{phone}}</a>
																							</span>
																						</td>
																					</tr>
																				</tbody>
																			</table>
																		</td>
																	</tr>
																</tbody>
															</table>
														</td>
													</tr>
												</tbody>
											</table>
										</td>
									</tr>
								</tbody>
							</table>
						</center>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
  name: 'Signature',
  props: ['name', 'position', 'phone', 'linkPhone']
}
</script>
